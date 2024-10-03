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
            'https://www.tiktok.com/@olivia.budiman11/video/7418405439106256133',  // Contoh video ID valid
            'https://www.tiktok.com/@jopkh/video/7420077744056421638',
        ];

        return [
            'title' => $this->faker->sentence(3),
            'url_video' => $this->faker->randomElement($youtubeIds),
        ];
    }
}
