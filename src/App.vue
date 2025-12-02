<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/shadcn">Go to Shadcn</RouterLink>
    <RouterLink to="/cesium">Go to Cesium</RouterLink>
    <RouterLink to="/smooth-dnd">Go to Vue3-Smooth-Dnd</RouterLink>
    <RouterLink to="/formkit-dnd">Go to @formkit/drag-and-drop</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
