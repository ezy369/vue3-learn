<template>
    <h1>Hello App!</h1>
    <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
    <nav>
        <RouterLink to="/">Go to Home</RouterLink>
        <RouterLink to="/shadcn">Go to Shadcn</RouterLink>
        <RouterLink to="/cesium">Go to Cesium</RouterLink>
    </nav>
    <main>
        <RouterView />
    </main>
</template>
