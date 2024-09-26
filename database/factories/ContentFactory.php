<?php

namespace Database\Factories;

use App\Models\Content;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Content>
 */
class ContentFactory extends Factory
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
            'category_id' => $this->faker->numberBetween(1, 50), // related to category table
            'title' => $this->faker->sentence(3),
            'content' => $this->faker->sentence(100),
            'likes' => $this->faker->numberBetween(0, 1000),
            'is_header_home' => $this->faker->boolean,
            'is_header_program' => $this->faker->boolean,
            'tags' => $this->faker->words(3, true),
            'url_video' => $this->faker->randomElement($youtubeIds),
        ];
    }
}
