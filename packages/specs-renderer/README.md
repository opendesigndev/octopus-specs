# specs-renderer

## How I created src/octopus-format

```bash
git clone git@gitlab-ssh.avcd.cz:backend/open-design-docs.git
cd open-design-docs
git subtree split --prefix=src/pages/docs/octopus-format --annotate='(split) ' -b split
cd ..
git subtree add --prefix packages/specs-renderer/src/octopus-format --squash ./open-design-docs split
rm -rf open-design-docs
```

This should allow to update the subtree from upstream repo somehow but I did not
test that hypothesis.
