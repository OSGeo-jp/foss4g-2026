<script lang="ts">
  interface Props {
    title: string
    subtitle?: string
    description?: string
    image?: string
    imageAlt?: string
    children?: any
  }
  
  const { title, subtitle, description, image, imageAlt, children }: Props = $props()
</script>

<div class="hero min-h-96 bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      {#if image}
        <div class="avatar mb-6">
          <div class="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
            <img src={image} alt={imageAlt || title} />
          </div>
        </div>
      {/if}
      
      <h1 class="text-5xl font-bold">{title}</h1>
      
      {#if subtitle}
        <h2 class="text-2xl font-semibold mt-4 text-primary">{subtitle}</h2>
      {/if}
      
      {#if description}
        <p class="py-6">{description}</p>
      {/if}
      
      {#if children}
        <div class="mt-6">
          {@render children()}
        </div>
      {/if}
    </div>
  </div>
</div>
