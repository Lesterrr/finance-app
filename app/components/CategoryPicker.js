import React from "react";

import Picker from "./Picker";
import CategoryPickerItem from "./CategoryPickerItem";

const CategoryPicker = ({
  items,
  onSelectItem,
  selectedItem,
  onItemLongPress,
}) => {
  return (
    <Picker
      items={items}
      onSelectItem={onSelectItem}
      selectedItem={selectedItem}
      PickerItemComponent={CategoryPickerItem}
      placeholder="Select Category"
      onItemLongPress={onItemLongPress}
    />
  );
};

export default CategoryPicker;
