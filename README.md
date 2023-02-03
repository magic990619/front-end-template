# Fuji frontend assignement (0xblake.eth)

**Introduction**

The goal is to check your skills on building a Dapp (decentralized application, aka an application that uses blockchain as backend).

You can fork this repository which contains all the dependencies you'll need: [React](https://reactjs.org/) & [Next.js](https://nextjs.org/), [Material UI](https://mui.com/material-ui/getting-started/overview/), [RainbowKit](https://rainbowkit.com) and [ethers.js](https://docs.ethers.io/v5/).

**Assignment**

We created a contract [0xd054e5724d7d595b72abbb0c460e0221cd859c8f](https://goerli.etherscan.io/address/0xd054e5724d7d595b72abbb0c460e0221cd859c8f) on Goerly testnet, and we need a Dapp to interact with it.

Please build an app that:

- Contains a form which on submit calls `sayMew()` on our contract
- Displays all the `mews` returned by `getAllMeows()`
- Uses Material UI

💡 You can go with a 2-pages or single page architecture, the choice is yours. Same goes for naming, folders, and so on...

💡 You can take inspiration from [this assignment](http://messages-status-assignment.surge.sh/), transforming `messages` into `meows` and `username` into `address`.

**Skills tested**

- [ ] Connect a wallet
- [ ] Read a contract
- [ ] Write on a contract
- [ ] React & NextJS
- [ ] Material UI

Bonus: display user ENS
