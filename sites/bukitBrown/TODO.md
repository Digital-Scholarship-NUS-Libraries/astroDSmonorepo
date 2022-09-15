there will be 2 three.js experiences: **scrollyThree** and the **collection view**
they will both reuse a lot of the same things in utils

we can have the astro components directly in components
then under lib all the js parts (what is currently called Experience would be lib)
the current Experience.js would become scrollyThree.js and there'd be another collection.js
each would be called from the relevant astro component
world is also specific to the experience, need to have a scrollyThree and a collection folder
two different sources.json would probably go in each of these folders

components/
├ scrollyThree.astro
├ collectionView.astro
├ lib/
│ ├ Camera.js
│ ├ Renderer.js
│ ├ Resources.js
│ ├ Debug.js
│ ├ Sizes.js
│ └ Time.js
├ scrollyThree/
│ ├ scrollyThree.js
│ ├ sources.json
│ └ World/
│   ├ World.js
│   └ ...
└ collectionView/
  ├ collectionView.js
  ├ sources.json
  └ World/
    ├ World.js
    └ ...

