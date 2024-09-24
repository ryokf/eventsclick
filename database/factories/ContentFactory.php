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
        // $contents = DB->where('is_header', true)->count;

        return [
            'category_id' => $this->faker->numberBetween(1, 50), // related to category table
            'title' => $this->faker->sentence(3),
            'likes' => $this->faker->numberBetween(0, 1000),
            'is_header' => $this->faker->boolean,
            'tags' => $this->faker->words(3, true),
            'url_video' => $this->faker->url,
        ];
    }
}
