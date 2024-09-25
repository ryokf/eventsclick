<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Story>
 */
class StoryFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */


    public function definition(): array
    {
        $youtubeIds = [
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/0UOn0QExwx0?si=ngDQUcVPuF-N0l_l" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',  // Contoh video ID valid
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/5FrhtahQiRc?si=hPAiVP4p3-QOZYbd" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/C3GouGa0noM?si=boZengmBktKUH4H-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
            '<iframe width="560" height="315" src="https://www.youtube.com/embed/kmu7fEW-Pio?si=oIKAJGQ86hV0ceEW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
        ];

        return [
            'title' => $this->faker->sentence(3),
            'image' => "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D",
            // 'url_video' => 'https://www.youtube.com/embed?v=' . $this->faker->randomElement($youtubeIds),
            'url_video' => $this->faker->randomElement($youtubeIds),
        ];
    }
}
