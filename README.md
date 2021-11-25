# Octopus Specs

Octopus specifications and related TypeScript type definitions.

The project is setup as a mono-repo (using [Yarn Workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/)), contains following packages:

- `@avocode/octopus-oas` OpenAPI v3 Specification of the Octopus format
- `@avocode/octopus-ts`  TypeScript definitions [auto generated](auto-generated) from `octopus-oas`
- `@avocode/manifest-oas` *TODO* Octopus Manifest OpenAPI v3 Specification
- `@avocode/manifest-ts` *TODO*

[##](##) Development

Both the OAS projects contain `openapi.yaml` file as a specs definition entry-point, all of the actual schema definitions are in placed in `schemas` sub-directory.

Specification source is a structure of individual mutually referenced `.yaml` files, although the final result is always a single JSON file.

The specification development should be only a matter of updating the schema files. There's `yarn build` script at the top-level as well as in each workspace that creates the output and runs liters where needed.

[##](##) Release

### Version Bump

To realease the specs the version needs to be bumped first. There's a convention that all the packages in the project share the same version. There are four scripts for update of a particular SemVer number:

```
yarn version:bump:major
yarn version:bump:minor
yarn version:bump:patch
yarn version:bump:alpha
```

This step bumps version in all the packages, commits the changes and tags that commit with a version label.

So far all the changes were done locally. One can check the git log to verify everything is as intended. 

_Note that this might change in the future and the whole process might get automated by joining the two publish steps_

### Publish

There are two options for the actual publish step. Manual or automated via Gitlab CI runner.

#### Manual

Although 'manual' is not the recommended way of how to publish the packages, it's here for convenience and overall process speed-up. However, **caution is advised when using manual publish**

It's expected the user is already logged into the publish registry.

Then the script is just

```
yarn release
```

#### CI runner publish

The standard way of publishing the packages is to push the tag created by 'Version Bump' step into Gitlab and let the CI runner do the job.

```
git push --follow-tags
```

