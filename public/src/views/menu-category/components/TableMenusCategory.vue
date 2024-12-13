<template>
  <div class="card">
		<h5 class="card-header">Manage Category</h5>
    <div class="table-responsive text-nowrap">
			<table class="table">
				<thead>
					<tr>
						<th>Category</th>
						<th style="width: 100px;">View</th>
						<th style="width: 100px;">Update</th>
						<th style="width: 100px;">Delete</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td><button class="btn btn-primary btn-sm" @click="onView({})">View</button></td>
            <td><button class="btn btn-primary btn-sm" @click="onUpdate({})">Update</button></td>
            <td><button class="btn btn-danger btn-sm" @click="onDelete({})">Delete</button></td>
					</tr>
				</tbody>
			</table>
		</div>
  </div>
</template>
<script lang="ts">

	import { defineComponent } from 'vue';

	export default defineComponent({
		emits: ['view', 'update'],
		methods: {
			onView(theme: any) {
				this.$emit('view', {});
			},
			onUpdate(theme: any) {
				this.$emit('update', {});
			},
			onDelete(theme: any) {

			}
		}
	});

</script>