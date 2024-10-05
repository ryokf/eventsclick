<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\QuizOption>
 */
class QuizOptionFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'quiz_id' => $this->faker->numberBetween(1, 40), // related to quiz table
            'answers' => $this->faker->sentence(3),
            'is_true' => $this->faker->boolean,
        ];
    }
}
