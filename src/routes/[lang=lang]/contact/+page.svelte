<script lang="ts">
  import { t } from 'svelte-i18n'
</script>

<svelte:head>
  <title>{$t('contact.title')} - {$t('title')}</title>
</svelte:head>

<div class="container mx-auto px-4 py-8">
  <h1 class="text-4xl font-bold mb-8">{$t('contact.title')}</h1>
  
  <div class="max-w-2xl mx-auto">
    <form class="bg-white p-6 rounded-lg shadow-md">
      <div class="mb-4">
        <label for="name" class="block text-sm font-medium text-gray-700 mb-2">
          {$t('contact.form.name')}
        </label>
        <input
          type="text"
          id="name"
          name="name"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700 mb-2">
          {$t('contact.form.email')}
        </label>
        <input
          type="email"
          id="email"
          name="email"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-4">
        <label for="subject" class="block text-sm font-medium text-gray-700 mb-2">
          {$t('contact.form.subject')}
        </label>
        <input
          type="text"
          id="subject"
          name="subject"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div class="mb-6">
        <label for="message" class="block text-sm font-medium text-gray-700 mb-2">
          {$t('contact.form.message')}
        </label>
        <textarea
          id="message"
          name="message"
          rows="5"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {$t('contact.form.submit')}
      </button>
    </form>
  </div>
</div>
