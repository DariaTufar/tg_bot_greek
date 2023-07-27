const nohello = (ctx) => {
    let user = ctx.message.from.first_name
    ctx.reply(`Hey ${user}, I know who you are,   ask your question 🤦`)
}

export default nohello