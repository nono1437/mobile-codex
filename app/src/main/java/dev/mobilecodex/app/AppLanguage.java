package dev.mobilecodex.app;

import android.content.Context;
import org.json.JSONObject;
import java.nio.charset.StandardCharsets;
import java.util.*;
import dev.mobilecodex.app.core.Texts;
import static dev.mobilecodex.app.core.Json.*;

final class AppLanguage {
    private static Map<String, String> english = Map.of();
    private static Map<String, String> simplifiedChinese = Map.of();

    static void initialize(Context context) {
        english = loadCatalog(context, "translations-en.json");
        simplifiedChinese = loadCatalog(context, "translations-zh-CN.json");
        configure(context);
    }

    private static Map<String, String> loadCatalog(Context context, String assetName) {
        try (var stream = context.getAssets().open(assetName)) {
            var bytes = new java.io.ByteArrayOutputStream();
            byte[] buffer = new byte[8192]; int count;
            while ((count = stream.read(buffer)) != -1) bytes.write(buffer, 0, count);
            JSONObject json = new JSONObject(bytes.toString(StandardCharsets.UTF_8.name()));
            var values = new HashMap<String, String>();
            for (var keys = json.keys(); keys.hasNext();) {
                String key = keys.next();
                values.put(key, json.getString(key));
            }
            return Map.copyOf(values);
        } catch (Exception failure) {
            android.util.Log.e("AppLanguage", "Unable to load bundled translation catalog " + assetName, failure);
            return Map.of();
        }
    }

    static String choice(Context context) {
        return context.getSharedPreferences("appearance", 0).getString("language", "system");
    }

    static Locale locale(Context context) {
        String choice = choice(context);
        return choice.equals("system")
            ? context.getResources().getConfiguration().getLocales().get(0)
            : Locale.forLanguageTag(choice);
    }

    static String effectiveLanguage(Context context) {
        return normalizeLanguage(locale(context));
    }

    private static String normalizeLanguage(Locale locale) {
        if (locale == null) return "en";
        String language = locale.getLanguage();
        if ("ko".equalsIgnoreCase(language)) return "ko";
        if ("zh".equalsIgnoreCase(language)) {
            String tag = locale.toLanguageTag().toLowerCase(Locale.ROOT);
            String script = locale.getScript();
            String country = locale.getCountry();
            if ("Hans".equalsIgnoreCase(script)
                || "CN".equalsIgnoreCase(country)
                || "SG".equalsIgnoreCase(country)
                || tag.startsWith("zh-hans")) {
                return "zh-CN";
            }
        }
        return "en";
    }

    static void configure(Context context) {
        Texts.configure(effectiveLanguage(context), english, simplifiedChinese);
    }

    static JSONObject snapshot(Context context) {
        return obj(
            "choice", choice(context),
            "systemLanguage", context.getResources().getConfiguration().getLocales().get(0).toLanguageTag()
        );
    }

    @android.annotation.SuppressLint("ApplySharedPref")
    static void set(Context context, String value) throws java.io.IOException {
        if (!Set.of("system", "en", "ko", "zh-CN").contains(value)) {
            throw new IllegalArgumentException("Unsupported language");
        }
        if (!context.getSharedPreferences("appearance", 0).edit().putString("language", value).commit()) {
            throw new java.io.IOException("Unable to save language setting");
        }
        configure(context);
    }
}
