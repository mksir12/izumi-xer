const { izumi, mode, getUrl, formatTime } = require("../lib/");
const config = require("../config");

izumi(
    {
        pattern: "fullss ?(.*)",
        fromMe: mode,
        desc: "capture website screenshot",
        type: "downloader",
    },
    async (message, match, m) => {
        try {
            match = match || message.reply_message.text;
            if (!match) return await message.reply(`*_Need a link_*\n*eg:- .fullss https://github.com/sataniceypz/Izumi-v3*`);
            let url = await getUrl(match);
            let res = `https://perferct-circle.serv00.net/ss.php?q=${url}`;
            await message.sendFromUrl(res);
        } catch (error) {
            await message.reply('Failed to capture screenshot.');
        }
    }
);

izumi(
    {
        pattern: "wm",
        fromMe: mode,
        desc: "wame generator",
        type: "downloader",
    },
    async (message, match, m) => {
        try {
            match = match || message.reply_message.text;
            if (!message.quoted) return message.reply("_*Reply to a user*_");
            let sender = 'https://wa.me/' + (message.reply_message.sender || message.mention[0] || message.text).split('@')[0];
            await message.reply(sender);
        } catch (error) {
            await message.reply('Failed to catch You.');
        }
    }
);

izumi({
	pattern: 'alive',
	fromMe: mode,
	desc: 'Get bots runtime',
	type: 'info'
}, async (message, match, client) => {
    let sender = 'Iam Working Well 🤖 ' + (formatTime(process.uptime()));
	await message.reply(sender);
});

izumi({
	pattern: 'readmore ?(.*)',
        fromMe: mode,
        desc: readmore generator',
        type: 'info'
}, async (message, match, client) => {
    await message.reply(match.replace(/\+/g, (String.fromCharCode(8206)).repeat(4001)))
});

izumi(
    {
        pattern: "ss ?(.*)",
        fromMe: mode,
        desc: "capture website screenshot",
        type: "downloader",
    },
    async (message, match, m) => {
        try {
            match = match || message.reply_message.text;
            if (!match) return await message.reply(`*_Need a link_*\n*eg:- .ss https://github.com/sataniceypz/Izumi-v3*`);
            let url = await getUrl(match);
            let res = apiUrl + `api/screenshot?url=${url}&type=desktop&full&apikey=maskser`;
            await message.sendFromUrl(res);
        } catch (error) {
            await message.reply('Failed to capture screenshot.');
        }
    }
);
