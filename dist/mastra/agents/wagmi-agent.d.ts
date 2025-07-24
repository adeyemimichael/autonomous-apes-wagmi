import { Agent } from "@mastra/core/agent";
export declare const wagmiAgent: Agent<"WAGMI Trading Agent", {
    fetchMarketData: import("@mastra/core/tools").Tool<import("zod").ZodObject<{
        symbols: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
        includeMetrics: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
    }, "strip", import("zod").ZodTypeAny, {
        symbols: string[];
        includeMetrics: boolean;
    }, {
        symbols?: string[] | undefined;
        includeMetrics?: boolean | undefined;
    }>, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>, import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{
        symbols: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
        includeMetrics: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
    }, "strip", import("zod").ZodTypeAny, {
        symbols: string[];
        includeMetrics: boolean;
    }, {
        symbols?: string[] | undefined;
        includeMetrics?: boolean | undefined;
    }>>> & {
        inputSchema: import("zod").ZodObject<{
            symbols: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
            includeMetrics: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
            symbols: string[];
            includeMetrics: boolean;
        }, {
            symbols?: string[] | undefined;
            includeMetrics?: boolean | undefined;
        }>;
        outputSchema: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodAny>;
        execute: (context: import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{
            symbols: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodArray<import("zod").ZodString, "many">>>;
            includeMetrics: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodBoolean>>;
        }, "strip", import("zod").ZodTypeAny, {
            symbols: string[];
            includeMetrics: boolean;
        }, {
            symbols?: string[] | undefined;
            includeMetrics?: boolean | undefined;
        }>>) => Promise<any>;
    };
    fetchPortfolioBalance: import("@mastra/core/tools").Tool<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>, import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>, import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>> & {
        inputSchema: import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>;
        outputSchema: import("zod").ZodRecord<import("zod").ZodString, import("zod").ZodNumber>;
        execute: (context: import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{}, "strip", import("zod").ZodTypeAny, {}, {}>>) => Promise<any>;
    };
    executeAdvancedTrade: import("@mastra/core/tools").Tool<import("zod").ZodObject<{
        fromToken: import("zod").ZodString;
        toToken: import("zod").ZodString;
        amount: import("zod").ZodString;
        strategy: import("zod").ZodString;
        riskLevel: import("zod").ZodDefault<import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        maxSlippage: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
    }, "strip", import("zod").ZodTypeAny, {
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
    }>, import("zod").ZodAny, import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{
        fromToken: import("zod").ZodString;
        toToken: import("zod").ZodString;
        amount: import("zod").ZodString;
        strategy: import("zod").ZodString;
        riskLevel: import("zod").ZodDefault<import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
        maxSlippage: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
    }, "strip", import("zod").ZodTypeAny, {
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
        inputSchema: import("zod").ZodObject<{
            fromToken: import("zod").ZodString;
            toToken: import("zod").ZodString;
            amount: import("zod").ZodString;
            strategy: import("zod").ZodString;
            riskLevel: import("zod").ZodDefault<import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
            maxSlippage: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
        }, "strip", import("zod").ZodTypeAny, {
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
        outputSchema: import("zod").ZodAny;
        execute: (context: import("@mastra/core/tools").ToolExecutionContext<import("zod").ZodObject<{
            fromToken: import("zod").ZodString;
            toToken: import("zod").ZodString;
            amount: import("zod").ZodString;
            strategy: import("zod").ZodString;
            riskLevel: import("zod").ZodDefault<import("zod").ZodEnum<["LOW", "MEDIUM", "HIGH"]>>;
            maxSlippage: import("zod").ZodDefault<import("zod").ZodOptional<import("zod").ZodNumber>>;
        }, "strip", import("zod").ZodTypeAny, {
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
}, Record<string, import("@mastra/core/dist/types-Bo1uigWx").M>>;
//# sourceMappingURL=wagmi-agent.d.ts.map