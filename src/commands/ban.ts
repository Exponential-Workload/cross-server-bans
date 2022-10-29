import {
  CacheType, ChatInputCommandInteraction, SlashCommandBuilder,
} from 'discord.js';
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
    await interaction.guild.members.ban(member, { 'reason': message });
    return await interaction.reply(`banned <@${member.id}>`);
  };
  data = (new SlashCommandBuilder)
    .setName('ban')
    .setDescription('Bans a user from this guild')
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
