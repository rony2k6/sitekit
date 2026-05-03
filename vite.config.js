import { defineConfig } from 'vite'
import laravel, { refreshPaths } from 'laravel-vite-plugin'

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: [
                ...refreshPaths,
                'app/Filament/**',
                'app/Forms/Components/**',
                'app/Livewire/**',
                'app/Infolists/Components/**',
                'app/Providers/Filament/**',
                'app/Tables/Columns/**',
            ],
            build: {
                // ensure manifest.json is emitted directly to outDir (no .vite subfolder)
                manifest: true,
                rollupOptions: {
                    output: {
                        // prevent output being nested under ".vite"
                        entryFileNames: '[name].js',
                        chunkFileNames: '[name].js',
                        assetFileNames: '[name][extname]',
                    },
                },
            },
        }),
    ],
})
