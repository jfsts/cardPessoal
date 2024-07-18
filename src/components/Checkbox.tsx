import { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { cn } from '../lib/utils';

// TODO: make controlled (optional)
interface CheckboxProps extends React.ComponentPropsWithoutRef<typeof View> {
  label?: string;
  labelClasses?: string;
  checkboxClasses?: string;
  isChecked?: boolean;
  onChange?: (valor: boolean) => void;
}
function Checkbox({
  label,
  labelClasses,
  checkboxClasses,
  className,
  isChecked = false,
  onChange,
  ...props
}: CheckboxProps) {
  const toggleCheckbox = () => {
    if (onChange) {
      onChange(!isChecked);
    }
  };

  return (
    <View className={cn('gap-2', className)} {...props}>
      <TouchableOpacity onPress={toggleCheckbox}>
        <View
          className={cn(
            'w-8 h-8 border border-gray-500 rounded bg-gray-800 flex justify-center items-center',
            {
              'bg-green-500': isChecked,
            },
            checkboxClasses,
          )}
        >
          {isChecked && <Text className="text-white text-2xl">✓</Text>}
        </View>
      </TouchableOpacity>
      {label && (
        <Text className={cn('text-primary', labelClasses)}>{label}</Text>
      )}
    </View>
  );
}

export { Checkbox };
