import axios from "axios";

type Stack = "backend" | "frontend";
type Level = "debug" | "info" | "warn" | "error" | "fatal";

type BackendPackage =
  | "cache"
  | "controller"
  | "cron_job"
  | "db"
  | "domain"
  | "handler"
  | "repository"
  | "route"
  | "service";

type FrontendPackage =
  | "api"
  | "component"
  | "hook"
  | "page"
  | "state"
  | "style";

type SharedPackage = "auth" | "config" | "middleware" | "utils";

type PackageName = BackendPackage | FrontendPackage | SharedPackage;

interface LogConfig {
  baseUrl: string;
  accessToken: string;
}

let globalConfig: LogConfig | null = null;

export function initializeLogger(config: LogConfig): void {
  globalConfig = config;
}

export async function Log(
  stack: Stack,
  level: Level,
  pkg: PackageName,
  message: string
): Promise<void> {
  if (!globalConfig) {
    throw new Error("Logger not initialized");
  }

  try {
    await axios.post(
      `${globalConfig.baseUrl}/evaluation-service/logs`,
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${globalConfig.accessToken}`,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Logging failed:", error);
  }
}