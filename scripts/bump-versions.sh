#!/bin/sh

if [ -n "`git status --porcelain`" ]; then
    echo "ABORTED, repository contains uncommited changes and/or untracked files."
    exit 1
fi

case $1 in
    --alpha)
        VERSION_ARGS="--preid alpha --prerelease"
        ;;

    --patch)
        VERSION_ARGS="--patch"
        ;;

    --minor)
        VERSION_ARGS="--minor"
        ;;

    --major)
        VERSION_ARGS="--major"
        ;;

    --version)
        VERSION_ARGS="--version $2"
        ;;

    *)
        VERSION_ARGS="--patch"
        ;;
esac

# relies on 'postversion' script in top-level package.json to run version in workspaces
yarn version $VERSION_ARGS

# commits all the bumped package.json(s) (squashes with what `yarn version` commited)
git add .
git commit --squash HEAD -m ""
GIT_EDITOR=: git rebase -i --autosquash HEAD~2

# gets the version from the commit message
VERSION=`git log -1 --pretty=format:%B`

# updated the tag
git tag -d $VERSION
git tag -a -m $VERSION $VERSION

echo Packages bumped to version: $VERSION
