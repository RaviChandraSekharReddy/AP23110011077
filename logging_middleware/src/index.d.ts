type Stack = "backend" | "frontend";
type Level = "debug" | "info" | "warn" | "error" | "fatal";
type BackendPackage = "cache" | "controller" | "cron_job" | "db" | "domain" | "handler" | "repository" | "route" | "service";
type FrontendPackage = "api" | "component" | "hook" | "page" | "state" | "style";
type SharedPackage = "auth" | "config" | "middleware" | "utils";
type PackageName = BackendPackage | FrontendPackage | SharedPackage;
interface LogConfig {
    baseUrl: string;
    accessToken: string;
}
export declare function initializeLogger(config: LogConfig): void;
export declare function Log(stack: Stack, level: Level, pkg: PackageName, message: string): Promise<void>;
export {};
//# sourceMappingURL=index.d.ts.map