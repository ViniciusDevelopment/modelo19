import { definePreset } from '@primeng/themes';
import Lara from '@primeng/themes/lara';

const MyLaraLightBluePreset = definePreset(Lara, {
    semantic: {
        primary: {
            50: '#e3f2fd',
            100: '#bbdefb',
            200: '#90caf9',
            300: '#64b5f6',
            400: '#42a5f5',
            500: '#2196f3',
            600: '#1e88e5',
            700: '#1976d2',
            800: '#1565c0',
            900: '#0d47a1',
            950: '#083b7a',
        },
        colorScheme: {
            light: {
                surface: {
                    0: '#ffffff',
                    50: '#f9fafb',
                    100: '#f3f4f6',
                    200: '#e5e7eb',
                    300: '#d1d5db',
                    400: '#9ca3af',
                    500: '#6b7280',
                    600: '#4b5563',
                    700: '#374151',
                    800: '#1f2937',
                    900: '#111827',
                    950: '#0b0e13',
                }
            }
        }
    }
});

export default MyLaraLightBluePreset;
