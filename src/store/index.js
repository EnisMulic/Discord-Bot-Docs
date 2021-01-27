import { v4 as uuidv4 } from 'uuid';

const serverListTemplate = [
    {
        id: '',
        name: '',
        image: '',
        categories: [
            {
                id: '',
                name: '',
                channels: [
                    {
                        id: '',
                        name: '',
                        topic: '',
                        messages: [
                            {
                                id: '',
                                content: '',
                                color: '',
                                isBot: false,
                            },
                        ],
                        user_groups: [
                            {
                                id: '',
                                name: '',
                                color: '',
                                users: [
                                    {
                                        id: '',
                                        name: '',
                                        image: '',
                                        isBot: false,
                                        isVarified: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

const servers = [
    {
        id: uuidv4(),
        name: 'Server 1',
        image: '',
        categories: [
            {
                id: uuidv4(),
                name: 'Category 1',
                channels: [
                    {
                        id: uuidv4(),
                        name: 'C1 Channel 1',
                        topic: '',
                        messages: [
                            {
                                id: uuidv4(),
                                content: 'A message @here',
                                name: 'User 1',
                                color: '#6a0dad',
                                isBot: false,
                            },
                            {
                                id: uuidv4(),
                                content:
                                    '***__~~AAAA~~__*** <#0567685465> @everyone',
                                name: 'Admin',
                                color: '#ffcc00',
                                isBot: false,
                            },
                        ],
                        user_groups: [
                            {
                                id: uuidv4(),
                                name: 'Admin',
                                color: '#ffcc00',
                                users: [
                                    {
                                        id: uuidv4(),
                                        name: 'Admin',
                                        color: '#ffcc00',
                                        image: '',
                                        isBot: false,
                                        isVarified: false,
                                    },
                                    {
                                        id: uuidv4(),
                                        name: 'Bot',
                                        color: '#ffcc00',
                                        image: '',
                                        isBot: true,
                                        isVarified: false,
                                    },
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
];

export default servers;
