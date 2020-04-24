import React from "react";
import CollectionItem from "../collection-item/collection-item.component";
import "./preview-collection.styles.scss";

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="preview">
      {items
        .filter((e, i) => i < 4)
        .map(({ id, ...otherProps }) => (
          <CollectionItem key={id} {...otherProps}></CollectionItem>
        ))}
    </div>
  </div>
);
export default CollectionPreview;
