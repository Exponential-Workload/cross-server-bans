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
    await interaction.reply('unbanning...');
    let i = 0;
    for (const guild of mapped) {
      i++;
      const g = await guild;
      await g.members.unban(member, message);
      await interaction.editReply(`unbanning... (${i} of ${mapped.length})`);
    }
    return await interaction.editReply(`unbanned <@${member.id}>`);
  };
  data = (new SlashCommandBuilder)
    .setName('universalunban')
    .setDescription('Unbans a user from all fluxus guilds')
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
