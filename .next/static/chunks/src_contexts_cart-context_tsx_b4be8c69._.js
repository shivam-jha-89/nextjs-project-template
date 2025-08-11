(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/contexts/cart-context.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "CartProvider": (()=>CartProvider),
    "useCart": (()=>useCart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const CartContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])(null);
const cartReducer = (state, action)=>{
    switch(action.type){
        case 'ADD_ITEM':
            {
                const existingItemIndex = state.items.findIndex((item)=>item.pizza.id === action.payload.pizza.id && item.size === action.payload.size && JSON.stringify(item.selectedToppings.sort()) === JSON.stringify(action.payload.selectedToppings.sort()));
                let newItems;
                if (existingItemIndex >= 0) {
                    newItems = state.items.map((item, index)=>index === existingItemIndex ? {
                            ...item,
                            quantity: item.quantity + action.payload.quantity
                        } : item);
                } else {
                    newItems = [
                        ...state.items,
                        action.payload
                    ];
                }
                const total = calculateTotal(newItems);
                return {
                    items: newItems,
                    total
                };
            }
        case 'REMOVE_ITEM':
            {
                const newItems = state.items.filter((_, index)=>index.toString() !== action.payload);
                const total = calculateTotal(newItems);
                return {
                    items: newItems,
                    total
                };
            }
        case 'UPDATE_QUANTITY':
            {
                const newItems = state.items.map((item, index)=>index.toString() === action.payload.id ? {
                        ...item,
                        quantity: Math.max(0, action.payload.quantity)
                    } : item).filter((item)=>item.quantity > 0);
                const total = calculateTotal(newItems);
                return {
                    items: newItems,
                    total
                };
            }
        case 'CLEAR_CART':
            return {
                items: [],
                total: 0
            };
        default:
            return state;
    }
};
const calculateTotal = (items)=>{
    return items.reduce((total, item)=>{
        const basePrice = item.pizza.sizes[item.size];
        const toppingsPrice = item.selectedToppings.length * 1.5; // $1.5 per topping
        return total + (basePrice + toppingsPrice) * item.quantity;
    }, 0);
};
const CartProvider = ({ children })=>{
    _s();
    const [state, dispatch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useReducer"])(cartReducer, {
        items: [],
        total: 0
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CartContext.Provider, {
        value: {
            state,
            dispatch
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/src/contexts/cart-context.tsx",
        lineNumber: 84,
        columnNumber: 5
    }, this);
};
_s(CartProvider, "Vp+oVaXCHsbaLFwgBOsAtYS3HBE=");
_c = CartProvider;
const useCart = ()=>{
    _s1();
    const context = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
_s1(useCart, "b9L3QQ+jgeyIrH0NfHrJ8nn7VMU=");
var _c;
__turbopack_context__.k.register(_c, "CartProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_contexts_cart-context_tsx_b4be8c69._.js.map