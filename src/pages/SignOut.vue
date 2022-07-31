<script setup>
import { useUsersStore } from '@/features/users'

const usersStore = useUsersStore()

usersStore.resetUser()
window.location = '/'
</script>
