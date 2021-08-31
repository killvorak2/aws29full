export async function someStates(
  ctx: StatusChangeContext,
  next: () => Promise<any>
) {
  const { clients: { lead } } = ctx

  const email = "willamys@gmail.com"
  // GET dados API AWS
  const clienteInfos = await lead.getLead(email)
  console.log(clienteInfos);

  await next()
}
