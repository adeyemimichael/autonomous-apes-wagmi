import { z } from "zod";
export declare const fetchMarketData: import("@mastra/core/tools").Tool<z.ZodObject<{
    symbols: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    includeMetrics: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    symbols: string[];
    includeMetrics: boolean;
}, {
    symbols?: string[] | undefined;
    includeMetrics?: boolean | undefined;
}>, z.ZodRecord<z.ZodString, z.ZodAny>, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    symbols: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    includeMetrics: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
}, "strip", z.ZodTypeAny, {
    symbols: string[];
    includeMetrics: boolean;
}, {
    symbols?: string[] | undefined;
    includeMetrics?: boolean | undefined;
}>>> & {
    inputSchema: z.ZodObject<{
        symbols: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        includeMetrics: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        symbols: string[];
        includeMetrics: boolean;
    }, {
        symbols?: string[] | undefined;
        includeMetrics?: boolean | undefined;
    }>;
    outputSchema: z.ZodRecord<z.ZodString, z.ZodAny>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        symbols: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
        includeMetrics: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
    }, "strip", z.ZodTypeAny, {
        symbols: string[];
        includeMetrics: boolean;
    }, {
        symbols?: string[] | undefined;
        includeMetrics?: boolean | undefined;
    }>>) => Promise<any>;
};
export declare const fetchPortfolioBalance: import("@mastra/core/tools").Tool<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>, z.ZodRecord<z.ZodString, z.ZodNumber>, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>> & {
    inputSchema: z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>;
    outputSchema: z.ZodRecord<z.ZodString, z.ZodNumber>;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>) => Promise<any>;
};
export declare const executeAdvancedTrade: import("@mastra/core/tools").Tool<z.ZodObject<{
    fromToken: z.ZodString;
    toToken: z.ZodString;
    amount: z.ZodString;
    strategy: z.ZodString;
    riskLevel: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
    maxSlippage: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    fromToken: string;
    toToken: string;
    amount: string;
    strategy: string;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    maxSlippage: number;
}, {
    fromToken: string;
    toToken: string;
    amount: string;
    strategy: string;
    riskLevel?: "LOW" | "MEDIUM" | "HIGH" | undefined;
    maxSlippage?: number | undefined;
}>, z.ZodAny, import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
    fromToken: z.ZodString;
    toToken: z.ZodString;
    amount: z.ZodString;
    strategy: z.ZodString;
    riskLevel: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
    maxSlippage: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
}, "strip", z.ZodTypeAny, {
    fromToken: string;
    toToken: string;
    amount: string;
    strategy: string;
    riskLevel: "LOW" | "MEDIUM" | "HIGH";
    maxSlippage: number;
}, {
    fromToken: string;
    toToken: string;
    amount: string;
    strategy: string;
    riskLevel?: "LOW" | "MEDIUM" | "HIGH" | undefined;
    maxSlippage?: number | undefined;
}>>> & {
    inputSchema: z.ZodObject<{
        fromToken: z.ZodString;
        toToken: z.ZodString;
        amount: z.ZodString;
        strategy: z.ZodString;
        riskLevel: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        maxSlippage: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        fromToken: string;
        toToken: string;
        amount: string;
        strategy: string;
        riskLevel: "LOW" | "MEDIUM" | "HIGH";
        maxSlippage: number;
    }, {
        fromToken: string;
        toToken: string;
        amount: string;
        strategy: string;
        riskLevel?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        maxSlippage?: number | undefined;
    }>;
    outputSchema: z.ZodAny;
    execute: (context: import("@mastra/core/tools").ToolExecutionContext<z.ZodObject<{
        fromToken: z.ZodString;
        toToken: z.ZodString;
        amount: z.ZodString;
        strategy: z.ZodString;
        riskLevel: z.ZodDefault<z.ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        maxSlippage: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
    }, "strip", z.ZodTypeAny, {
        fromToken: string;
        toToken: string;
        amount: string;
        strategy: string;
        riskLevel: "LOW" | "MEDIUM" | "HIGH";
        maxSlippage: number;
    }, {
        fromToken: string;
        toToken: string;
        amount: string;
        strategy: string;
        riskLevel?: "LOW" | "MEDIUM" | "HIGH" | undefined;
        maxSlippage?: number | undefined;
    }>>) => Promise<any>;
};
//# sourceMappingURL=market-data.d.ts.map