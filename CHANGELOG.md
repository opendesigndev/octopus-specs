## 3.1.1 (2023-06-08)

- octopus: added `Bounds` descriptor
- octopus: added `absoluteBoundingBox` property on `LayerMeta` descriptor
- octopus: added `absoluteRenderBounds` property on `LayerMeta` descriptor

## 3.1.0 (2023-04-05)

- manifest: added `dimensions` property on `LayerMeta` descriptor

## 3.0.2 (2023-03-06)

- octopus: Blurs are now divided to `GAUSSIAN_BLUR` and `BOUNDED_BLUR`
- octopus: Glows are removed in favor of Shadows
- octopus: `maskChannels`, `filters` are added to `ChangeValues`

## 3.0.1 (2023-02-06)

- manifest: added `OctopusManifestMeta` descriptor
- manifest: added `meta` property on `OctopusManifest` descriptor

## 3.0.0-alpha.41 (2023-01-18)

- manifest: added `PARTIAL` value to `role` enum on `Component` descriptor
- octopus: renamed `ARTBOARD` to `OCTOPUS_COMPONENT` on property `type` on `OctopusComponent` descriptors

## 3.0.0-alpha.40 (2022-11-04)

- manifest: added `originalId` property on `ComponentMeta` descriptor
- manifest: added `ChunkMeta` descriptor
- manifest: added `meta` property on `Chunk` descriptor
- manifest: added `ComponentSetMeta` descriptor
- manifest: added `meta` property on `ComponentSet` descriptor
- manifest: added `LibraryMeta` descriptor
- manifest: added `meta` property on `Library` descriptor
- manifest: added `PageMeta` descriptor
- manifest: added `meta` property on `Page` descriptor

## 3.0.0-alpha.39 (2022-10-13)

## 3.0.0-alpha.38 (2022-10-13)

## 3.0.0-alpha.37 (2022-10-07)

- octopus: renamed `OctopusDocument` to `OctopusComponent`

## 3.0.0-alpha.36 (2022-08-26)

- manifest: added new `SOURCE` artifact type

## 3.0.0-alpha.35 (2022-06-02)

- octopus: `Image`'s `subsection` is now `Rectangle`

## 3.0.0-alpha.34 (2022-06-02)

- octopus: removed `premultiplied` flag on `Image` descriptor
- octopus: removed `DISSOLVE` blend mode

## 3.0.0-alpha.33 (2022-05-10)

- octopus: added `maskChannels` optional property on MASK_GROUP with RGBAMatrix (5x1) type
- octopus: added `filterIndex` to `Change`
- octopus: renamed `textTransform` to `transform` on `Text` descriptors
- octopus: renamed effect basis `BODY_PLUS_STROKES` to `BODY_AND_STROKES`
- octopus: changed mask basis enum
- octopus: removed `BRIGHTNESS_TO_ALPHA` and `INVERSE_BRIGHTNESS_TO_ALPHA` blend modes

## 3.0.0-alpha.32 (2022-05-03)

## 3.0.0-alpha.31 (2022-05-03)

## 3.0.0-alpha.30 (2022-05-03)

- manifest: removed `isPasteboard` and `isArtboard` keys
- manifest: added `role` property on Component descriptor
- manifest: Component's `bounds` are optional now

- octopus: changed `ID` to `Id` everywhere
- octopus: added `overrides` on `ComponentReference` layer

## 3.0.0-alpha.29 (2022-04-29)

- octopus: added `CLIP_LINE` text overflow

## 3.0.0-alpha.28 (2022-04-26)

- manifest: changed `ID` to `Id` everywhere
- manifest: `globalId` is moved to `Component.meta`
- manifest: fixed bounds (`width` / `height` instead of `w` / `h`)
- manifest: fixed error's code type (`integer` instead of `number`)
- manifest: merged `Artboard` and `Component` entities
- manifest: origin is not limited by enum now
- manifest: changed resource location entities (`RELATIVE`, `EXTERNAL`)

- octopus: ImageRef types are changed to enum of `[PATH, RESOURCE_REF]`

- misc: moved prettier config to the monorepo root

## 3.0.0-alpha.19 (2022-02-08)

- '[type](type)' in union schemas made required

## 3.0.0-alpha.18 (2022-02-08)

- Only single shape geometry is allowed in the shape layer
- PathRectangle only allows a single value for its corner radius
- Resolved union schemas with type discriminator
- Reverted removal of OctopusDocument

## 3.0.0-alpha.17 (2022-02-03)

- Fixed shape purpose description
- OctopusDocument is an layer; added artboard related metadata to 'layer.meta' object
- Added source shape meta information into Path
- Set named type of gradient color stops array
- Added overflow policy to the text schema
- Simplified text transform - removed origin
- Removed EffectBackgroundBlur
- Gradient type 'required'
