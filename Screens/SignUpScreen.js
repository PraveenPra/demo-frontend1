import * as React from 'react';
import {
    NativeBaseProvider,
    Box,
    Text,
    Heading,
    VStack,
    FormControl,
    Input,
    Link,
    Button,
    Icon,
    IconButton,
    HStack,
    Divider,
    Select,
    CheckIcon
} from 'native-base';

export default function App() {

    const [value, setValue] = React.useState("Hospital")

    return (
        <NativeBaseProvider>
            <Box
                safeArea
                flex={1}
                p={2}
                w="90%"
                mx='auto'
            >
                <Heading size="lg" color='primary.500'>
                    Welcome
                </Heading>
                <Heading color="muted.400" size="xs">
                    Sign up to continue!
                </Heading>

                <VStack space={2} mt={5}>
                    <FormControl isRequired>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Name
                        </FormControl.Label>
                        <Input />
                    </FormControl>

                    <FormControl isRequired>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Email
                        </FormControl.Label>
                        <Input />
                    </FormControl>

                    <FormControl isRequired>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Contact Number
                        </FormControl.Label>
                        <Input />
                    </FormControl>


                    <FormControl isRequired isInvalid>
                        <FormControl.Label>Role</FormControl.Label>
                        <Select
                            selectedValue={value}
                            minWidth={200}
                            accessibilityLabel="Select your favorite programming language"
                            placeholder="Select your favorite programming language"
                            onValueChange={(itemValue) => {
                                setValue(itemValue)
                            }}
                            _selectedItem={{
                                bg: "teal.600",
                                endIcon: <CheckIcon size={5} />,
                            }}
                            mt={1}
                        >
                            <Select.Item label="Hospital" value="Hospital" />
                            <Select.Item label="Corporate" value="Corporate" />
                            <Select.Item label="Doctor" value="Doctor" />
                            <Select.Item label="Donor" value="Donor" />
                            <Select.Item label="Clubs" value="Clubs" />
                        </Select>
                    </FormControl>


                        
                    <FormControl isRequired>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Password
                        </FormControl.Label>
                        <Input type="password" />
                    </FormControl>

                    <FormControl isRequired>
                        <FormControl.Label _text={{ color: 'muted.700', fontSize: 'sm', fontWeight: 600 }}>
                            Confirm Password
                        </FormControl.Label>
                        <Input type="password" />
                    </FormControl>
                    
                    <VStack space={2} mt={5}>
                        <Button colorScheme="cyan" _text={{ color: 'white' }}>
                            SignUp
                        </Button>

                    </VStack>
                </VStack>
            </Box>
        </NativeBaseProvider>
    );
}