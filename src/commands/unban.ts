import {
  CacheType, ChatInputCommandInteraction, SlashCommandBuilder,
} from 'discord.js';
import client from '..';
import {
  BaseCommand, IBaseCommand
} from '../classes/BaseCommand';

/*
  This is an example interaction command that echoes your message.
 */
export class Command extends BaseCommand implements IBaseCommand {
  async execute(interaction: ChatInputCommandInteraction<CacheType>) {
    const member = interaction.options.getUser('member');
    const message = interaction.options.getString('message');
    const mapped = (await client.guilds.fetch()).map(v => v.fetch());
    for (const guild of mapped) {
      const g = await guild;
      await g.members.unban(member, message);
    }
    return await interaction.reply(`unbanned <@${member}>`);
  };
  data = (new SlashCommandBuilder)
    .setName('universalunban')
    .setDescription('Unbans a user')
    .addUserOption(o=>o.setName('member').setDescription('Member to ban')
      .setRequired(true))
    .addStringOption((option) =>
      option
        .setName('message')
        .setDescription('A message for the bot to audit log | Is not dmed to user.')
        .setRequired(false)
    )
    .setDefaultMemberPermissions('1099511627782')
    .setDMPermission(false);
};
