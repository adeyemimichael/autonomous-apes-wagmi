import { Mastra } from "@mastra/core/mastra";
export declare const mastra: Mastra<{
    wagmiAgent: import("@mastra/core/agent").Agent<"WAGMI Trading Agent", {
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
}, Record<string, import("@mastra/core/dist/base-5ZyKaTRr").L<import("@mastra/core/dist/base-5ZyKaTRr").d<string, any, any, import("@mastra/core/dist/base-5ZyKaTRr").S<any, import("@mastra/core/dist/base-5ZyKaTRr").W<any, import("@mastra/core/dist/base-5ZyKaTRr").d<string, any, any, any>[], Record<string, any>>>>[], string, any, any>>, {
    tradingWorkflow: import("@mastra/core/workflows").Workflow<import("@mastra/core/workflows").DefaultEngineType, import("@mastra/core/workflows").Step<string, any, any, any, any, import("@mastra/core/workflows").DefaultEngineType>[], "wagmi-trading-workflow", import("zod").ZodObject<{
        strategy: import("zod").ZodDefault<import("zod").ZodEnum<["MOMENTUM", "MEAN_REVERSION", "REBALANCE", "ADAPTIVE"]>>;
    }, "strip", import("zod").ZodTypeAny, {
        strategy: "MOMENTUM" | "MEAN_REVERSION" | "REBALANCE" | "ADAPTIVE";
    }, {
        strategy?: "MOMENTUM" | "MEAN_REVERSION" | "REBALANCE" | "ADAPTIVE" | undefined;
    }>, import("zod").ZodObject<{
        result: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        result: string;
    }, {
        result: string;
    }>, import("zod").ZodObject<{
        result: import("zod").ZodString;
    }, "strip", import("zod").ZodTypeAny, {
        result: string;
    }, {
        result: string;
    }>>;
}, Record<string, import("@mastra/core/dist/vector").MastraVector<import("@mastra/core/dist/vector/filter").VectorFilter>>, Record<string, import("@mastra/core/dist/tts").MastraTTS>, import("@mastra/core/dist/logger-Bpa2oLL4").I, Record<string, import("@mastra/core/dist/base-5ZyKaTRr").g>, Record<string, import("@mastra/core/dist/base-5ZyKaTRr").N>, Record<string, import("@mastra/core/dist/base-5ZyKaTRr").h>>;
//# sourceMappingURL=index.d.ts.map