# Generated by Django 5.0.7 on 2024-07-30 10:09

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Component',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('component_name', models.CharField(max_length=70)),
                ('price', models.DecimalField(decimal_places=2, max_digits=10)),
                ('is_new', models.BooleanField(default=True)),
            ],
        ),
        migrations.CreateModel(
            name='Vehicle',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('license_plate', models.CharField(max_length=10)),
                ('vehicle_model', models.CharField(max_length=100)),
                ('vehicle_owner', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Issue',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('description', models.TextField()),
                ('repair_price', models.DecimalField(blank=True, decimal_places=2, max_digits=10, null=True)),
                ('is_repair', models.BooleanField(default=True)),
                ('component', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.component')),
                ('vehicle', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='services.vehicle')),
            ],
        ),
    ]
