const RPC = require('discord-rpc');

const clientId = 'Client ID';
const client = new RPC.Client({
    transport: 'ipc'
})

client.on('ready', () => {
    client.request('SET_ACTIVITY', {
        pid: 7799,
        activity: {
            details: 'อยู่หน้าคอมพิวเตอร์',
            state: '8:00 AM - 4:00 PM (TH)',
            assets: {
                large_image: '512x512',
                large_text: "Mira",
                small_image: '512x512',
                small_text: "Mira"
            },
            buttons: [
                {
                    label: 'TIkTok',
                    url: 'https://www.tiktok.com/@const_erykzenith'
                },
                {
                    label: 'Youtube',
                    url: 'https://www.youtube.com/@ErykZenith'
                }
            ]
        }
    }).catch(console.error);
});

client.login({ clientId }).catch(console.error);