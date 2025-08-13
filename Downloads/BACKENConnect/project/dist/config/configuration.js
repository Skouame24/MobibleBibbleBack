"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    port: parseInt(process.env.PORT, 10) || 9200,
    database: {
        url: process.env.DATABASE_URL,
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: '1d',
    },
    apiBible: {
        baseUrl: process.env.BIBLE_API_BASE_URL || 'https://api.scripture.api.bible/v1',
        apiKey: process.env.BIBLE_API_KEY,
        defaultBibleId: process.env.BIBLE_DEFAULT_ID || 'french-louis-segond',
    },
});
//# sourceMappingURL=configuration.js.map