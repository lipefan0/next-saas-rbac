import { defineAbilitiesFor } from '@saas/auth'

const ability = defineAbilitiesFor({ role: 'MEMBER' })

const userCanInviteSomeoneElse = ability.can('invite', 'User')
const userCanDeleteSomeoneElse = ability.can('delete', 'User')

const userCannotDeleteSomeoneElse = ability.cannot('delete', 'User')

console.log(userCanInviteSomeoneElse) // true
console.log(userCanDeleteSomeoneElse) // false
console.log(userCannotDeleteSomeoneElse) // true
