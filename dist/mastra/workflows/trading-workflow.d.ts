import { z } from "zod";
export declare const tradingWorkflow: import("@mastra/core/workflows").Workflow<import("@mastra/core/workflows").DefaultEngineType, import("@mastra/core/workflows").Step<string, any, any, any, any, import("@mastra/core/workflows").DefaultEngineType>[], "wagmi-trading-workflow", z.ZodObject<{
    strategy: z.ZodDefault<z.ZodEnum<["MOMENTUM", "MEAN_REVERSION", "REBALANCE", "ADAPTIVE"]>>;
}, "strip", z.ZodTypeAny, {
    strategy: "MOMENTUM" | "MEAN_REVERSION" | "REBALANCE" | "ADAPTIVE";
}, {
    strategy?: "MOMENTUM" | "MEAN_REVERSION" | "REBALANCE" | "ADAPTIVE" | undefined;
}>, z.ZodObject<{
    result: z.ZodString;
}, "strip", z.ZodTypeAny, {
    result: string;
}, {
    result: string;
}>, z.ZodObject<{
    result: z.ZodString;
}, "strip", z.ZodTypeAny, {
    result: string;
}, {
    result: string;
}>>;
//# sourceMappingURL=trading-workflow.d.ts.map