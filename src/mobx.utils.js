import { persistence, StorageAdapter } from "mobx-persist-store";

export const persistStore = (target, properties, persistName) => {
    // If you are using Next.js or server side rendering
    //   const isServer = typeof window === "undefined";

    //   if (isServer) {
    //     return target;
    //   }

    return persistence({
        name: persistName,
        properties,
        adapter: new StorageAdapter({
            read: async (name) => {
                const data = window.localStorage.getItem(name);
                console.log("[Mobx] persistStore [Read] target:", target._storageName, 'name:', name, 'data:', data)
                await new Promise(resolve => setTimeout(resolve, target._storageName == 'UserStore' ? 800 : 300)); // For hydrate simulation
                return data ? JSON.parse(data) : undefined;
            },
            write: async (name, content) => {
                console.log("[Mobx] persistStore [Write] target:", target._storageName, 'name:', name, 'content:', content)
                window.localStorage.setItem(name, JSON.stringify(content));
            }
        }),
        reactionOptions: {
            delay: 200
        }
    })(target);
};
