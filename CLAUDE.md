# Ailurus - OpenCV Image Processing Laboratory

A web-based image processing lab comparing Go WASM vs TypeScript/OpenCV.js performance.

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | Vue 3 (Composition API) + TypeScript |
| Build | Vite 8.0 |
| UI | Element Plus 2.13 |
| State | Pinia 3.0 |
| Routing | Vue Router 4.6 |
| Image Processing | OpenCV.js (WASM) + Go WASM |
| WASM Backend | Go |

## Project Structure

```
src/
├── assets/styles/          # Global CSS variables and styles
├── components/
│   ├── common/             # Shared: CanvasWrapper, DropDown, ImageEditorViewport
│   ├── layout/             # MainLayout, Navbar, SideBar, Appbrand
│   ├── utils/
│   │   ├── picture/        # TS implementations (affine, morphology)
│   │   └── wasm/           # WASM loader utilities
│   └── views/
│       ├── AudioProcess/   # Audio processing (placeholder)
│       └── ImageProcess/
│           ├── AffineTransform/   # Rotate, Scale, Translate, Perspective
│           ├── Morphology/        # Kernel, Operators, Threshold
│           └── PixelOperation/    # ColorChannel, ColorConversion
├── config/                 # Menu and app configuration
├── router/
│   ├── index.ts            # Router entry
│   └── modules/            # Route modules (Picture, Audio)
├── store/
│   └── index.ts            # Store exports (use this for all store imports)
└── wasm/logic/             # Go WASM source code
```

## Architecture

### Stores

All stores are located under `src/store/picture/` and exported via `src/store/index.ts`.

Import stores like:
```typescript
import { usePictureStore } from '@/store'
import { useMorphologyStore } from '@/store'
```

### WASM Integration

Go WASM logic lives in `src/wasm/logic/`. Build with:
```bash
cd src/wasm/logic && go build -o ../../public/main.wasm
```

Currently exposed functions:
- `window.__wasm_grayScale` - Grayscale conversion

### Type Definitions

Types are in `src/types/picture/` mirroring the store structure. Define types first, then implement stores.

## Development Guidelines

### Creating a New Image Processing Feature

1. **Add route** in `src/router/modules/Picture/`
2. **Define types** in `src/types/picture/[Feature]/`
3. **Create store** in `src/store/picture/[Feature]/`
4. **Implement TS utils** in `src/components/utils/picture/[feature]/`
5. **Add Go WASM** in `src/wasm/logic/` (if comparing performance)
6. **Create view component** in `src/components/views/ImageProcess/`

### Component Pattern

Use `el-card` for control panels with `shadow="never"`:
```vue
<el-card class="box-card" shadow="never">
  <template #header>
    <div class="card-header"><span>Title</span></div>
  </template>
  <!-- content -->
</el-card>
```

### State Management

- Each feature has its own Pinia store
- Use `reactive` for object state, `ref` for primitives
- Always sync changes to the global store before triggering image processing

## Key Files

| File | Purpose |
|------|---------|
| `src/store/picture/picture.ts` | Base image state (dimensions, canvas) |
| `src/components/common/CanvasWrapper.vue` | Canvas rendering wrapper |
| `src/components/common/ImageEditorViewport.vue` | Main image viewport |
| `src/components/utils/wasm/loader.ts` | WASM engine initialization |
| `src/wasm/logic/color.go` | Go WASM implementation |
