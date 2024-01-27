const env = process.env

export const nodeEnv = env.NODE_ENV || 'development'

export const PORT = env.PORT ?? 8080;
export const HOST = env.HOST ?? "0.0.0.0";
export const SERVER_URL = `http://${HOST}:${PORT}`

export default {
    port: PORT,
    host: HOST,
    serverUrl: SERVER_URL,
}