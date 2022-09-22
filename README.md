# Simple Skeleton

This is just a very easy to use Skeleton Component for React. You can use it in place of
content that is loading.

# How To use

There are several components that you can use to emulate the structure of the content that
is loading.

- **\<SkeletonContainer /\>** is the wrapper that is required for the Skeleton. You can pass
  a color to it **\<SkeletonContainer color="red" /\>** to change the color of the skeleton.
- **\<SkeletonRow \>** is used for rows. You can set the number of rows and columns as well
  the row height. The default row height is 1rem.

  An Example:
  **\<SkeletonRow rows={4} cols={15} /\>**
  Which creates 4 rows with each row being 15 columns wide.

- If you want to create a circle you can use **\<SkeletonCircle radius={4} /\>**.

- To create a placeholder for an image you can use **\<SkeletonImage width={100} height={100} /\>**.
  With images the width and height is in pixels.

By default all the components stack on top of each other. If you want items to line up
in a row side by side, you can wrap your components with \<SkeletonGroup\>.

You can also use **\<SkeletonStack \>** inside of a **\<SkeletonGroup\>** to make some items stack
on top of each other.

SkeletonGroup is just a **flexbox** with **flex-direction** set to row. SkeletonStack is a **flexbox** with **flex-direction** set to column.

To use the components all you have to do is include Skeleton.jsx and styles/Skeleton.module.css into your NextJs/React/Vite project.
