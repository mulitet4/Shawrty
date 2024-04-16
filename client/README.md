# Quickstart

### Supabase

- [Create New Project](https://supabase.com/dashboard/projects)
- [YT Tutorial](https://www.youtube.com/watch?v=dU7GwCOgvNY&list=WL&index=22&t=3273s)
- [Quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/nextjs)
- [Auth Quickstart](https://supabase.com/docs/guides/auth/server-side/nextjs)
- [Building app in nextjs](https://supabase.com/docs/guides/getting-started/tutorials/with-nextjs?database-method=sql)

### Capacitor

1. Set NODE_ENV to 'production' - `SET NODE_ENV=production`
2. use query parameters
3. create next.config.mjs

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: { ignoreBuildErrors: true },
  experimental: {
    missingSuspenseWithCSRBailout: false,
  },
};

export default nextConfig;
```

4. [Quickstart](https://capgo.app/blog/building-a-native-mobile-app-with-nextjs-and-capacitor/)
5. [Official Site](https://capgo.app/blog/building-a-native-mobile-app-with-nextjs-and-capacitor/)

### Design System

- [Colors](https://realtimecolors.com/?colors=344e41-dad7cd-3a5a40-b5c49c-588157)
- [Icons](https://www.flaticon.com/free-icons/three-lines)
- [ShadCN](https://ui.shadcn.com/docs/components/accordion)
