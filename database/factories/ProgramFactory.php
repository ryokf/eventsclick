<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Program>
 */
class ProgramFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'cover' => $this->faker->imageUrl(300, 300, 'abstract'),
            'description' => $this->faker->paragraph,
            'visibility' => $this->faker->randomElement(['visible', 'hide', 'archive']),
        ];
    }
}
