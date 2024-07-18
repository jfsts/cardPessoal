import { Badge } from '@/components/Badge';

import { User } from '@/components/User';
import { SKILLS } from '@/utils/skills';
import React, { useState } from 'react';
import { Image, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Switch } from '@/components/Switch';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Checkbox } from '@/components/Checkbox';
import { Input } from '@/components/Input';
import { colors } from '@/styles/colors';
import { useToast } from '@/components/Toast';

export function Profile() {
  const [isEnabled, setIsEnabled] = useState(true);
  const [isEmailPublic, setIsEmailPublic] = useState(false);

  const { toast } = useToast();

  return (
    <View className="flex-1 bg-gray-700">
      <ScrollView className="mb-12">
        <Image
          source={require('@/assets/banner.png')}
          className="w-full h-57 -mb-16"
        />
        <User />
        <View className="justify-center mt-3 mx-4">
          <Text className="text-white text-xl font-bold ">Skills</Text>
        </View>

        <View className="flex-row flex-wrap mt-3">
          {SKILLS.map((skill) => (
            <View className="px-2 p-1" key={skill.name}>
              <Badge
                className="bg-gray-500"
                labelClasses="text-white text-sm"
                label={skill.name}
                uri={skill.icon}
              ></Badge>
            </View>
          ))}
        </View>

        <View className="justify-center mt-8 mx-4">
          <Text className="text-white text-xl font-bold ">Preferences</Text>
        </View>

        <View className="flex-row items-center mt-4 mx-4">
          <Ionicons name="moon" size={20} color="white" />
          <Text className="text-white text-lg mx-3 ">Dark mode</Text>
          <View className="flex-1">
            <Switch onValueChange={setIsEnabled} value={isEnabled} />
          </View>
        </View>
        <View className="border-b mr-2 ml-2 mt-3 border-gray-500" />

        <View className="flex-row items-center mt-4 mx-4">
          <View className="flex-1 flex-row items-center">
            <MaterialIcons name="email" size={20} color="white" />
            <Text className="text-white text-lg mx-3 ">Email public</Text>
          </View>
          <Checkbox
            isChecked={isEmailPublic}
            onChange={setIsEmailPublic}
            className="mr-3"
          />
        </View>
        <View className="border-b mr-2 ml-2 mt-3 border-gray-500" />
        <View className="justify-center mt-8 mx-2">
          <Text className="text-white text-xl font-bold ">Company</Text>

          <Input
            placeholder={'Company'}
            className="border-gray-400 mt-2 mb-6 text-gray-400"
          />
          <TouchableOpacity
            style={{
              marginTop: 20,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              paddingHorizontal: 16,
              paddingVertical: 8,
              elevation: 2,
              height: 46,
              width: '100%',
              backgroundColor: colors.green[500],
            }}
            onPress={() => {
              toast('Testando o Toast', 'success');
            }}
          >
            <Text className="text-center text-white text-base font-bold">
              Save
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
