package dev.mobilecodex.app.core;

import java.util.Map;

/** Translation is explicit at UI/error construction sites; never applied to file or model content. */
public final class Texts {
    private record Catalog(
        String language,
        Map<String, String> english,
        Map<String, String> chinese,
        Map<String, String> source
    ) {}

    private static volatile Catalog catalog = new Catalog("ko", Map.of(), Map.of(), Map.of());

    private Texts() {}

    public static void configure(
        String language,
        Map<String, String> english,
        Map<String, String> chinese
    ) {
        var reverse = new java.util.HashMap<String, String>();
        english.forEach((key, value) -> reverse.putIfAbsent(value, key));
        catalog = new Catalog(
            language == null ? "en" : language,
            Map.copyOf(english),
            Map.copyOf(chinese),
            Map.copyOf(reverse)
        );
    }

    /** Compatibility helper for older callers and tests. */
    public static void configure(boolean korean, Map<String, String> english) {
        configure(korean ? "ko" : "en", english, Map.of());
    }

    public static String t(String text) {
        if (text == null) return null;
        Catalog c = catalog;
        String sourceKey = c.source.getOrDefault(text, text);
        if ("ko".equals(c.language)) {
            return sourceKey;
        }
        if ("zh-CN".equalsIgnoreCase(c.language)) {
            return c.chinese.getOrDefault(
                sourceKey,
                c.english.getOrDefault(sourceKey, text)
            );
        }
        return c.english.getOrDefault(sourceKey, text);
    }
}
