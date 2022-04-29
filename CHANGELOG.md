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
