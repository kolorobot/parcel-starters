Parcel 2 Starters
=================

# Available starters

- [Parcel 2 Webapp Starter](parcel-webapp-starter/README.md)
- [Parcel 2 React Starter](parcel-react-starter/README.md)
- [Parcel 2 React TypeScript Starter](parcel-react-typescript-starter/README.md)

# Get started

- Clone this repository
- Navigate to selected starter's directory
- Start coding

# Use `sparse-checkout` to check out a single starter

> Replace `<directory>` with actual starter's directory

    git clone \
    --depth 1  \
    --filter=blob:none  \
    --sparse \
    https://github.com/kolorobot/parcel-starters \
    ;
    cd parcel-starters
    git sparse-checkout set <directory>
