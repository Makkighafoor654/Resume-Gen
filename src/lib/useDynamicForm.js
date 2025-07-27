import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

/**
 * Generic hook to manage multiple form blocks & sync with context.
 * @param {Array} initialItems - initial list (from context)
 * @param {Function} onChange - callback to update context
 */
export function useDynamicForm(initialItems = [], onChange) {
  // ✅ Lazy initialize ONCE
  const [items, setItems] = useState(() =>
    initialItems.map(item => ({
      id: uuidv4(),
      data: item,
      isEditing: false,
    }))
  );

  const handleAdd = () => {
    setItems(prev => [
      ...prev,
      {
        id: uuidv4(),
        data: null,
        isEditing: true,
      },
    ]);
  };

  const handleSave = (id, data) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, data, isEditing: false } : item
      )
    );
  };

  const handleEdit = (id) => {
    setItems(prev =>
      prev.map(item =>
        item.id === id ? { ...item, isEditing: true } : item
      )
    );
  };

  const handleDelete = (id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    const validData = items.map(item => item.data).filter(Boolean);
    onChange(validData);
  }, [items, onChange]); // ✅ only run when actual items change

  return {
    items,
    handleAdd,
    handleSave,
    handleEdit,
    handleDelete,
  };
}
